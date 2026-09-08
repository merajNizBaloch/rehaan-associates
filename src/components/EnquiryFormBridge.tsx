"use client";

import { useEffect } from "react";

function getStatusNode(form: HTMLFormElement) {
  let node = form.querySelector<HTMLElement>("[data-enquiry-status]");
  if (node) return node;

  node = document.createElement("p");
  node.dataset.enquiryStatus = "true";
  node.className = "mt-4 text-sm leading-6";
  form.appendChild(node);
  return node;
}

function setStatus(form: HTMLFormElement, message: string, success = false) {
  const node = getStatusNode(form);
  node.textContent = message;
  node.className = success
    ? "mt-4 text-sm leading-6 text-emerald-600"
    : "mt-4 text-sm leading-6 text-red-600";
}

function value(data: FormData, key: string) {
  const raw = data.get(key);
  return typeof raw === "string" ? raw.trim() : "";
}

export default function EnquiryFormBridge() {
  useEffect(() => {
    const busyForms = new WeakSet<HTMLFormElement>();

    async function submit(form: HTMLFormElement) {
      if (busyForms.has(form)) return;

      const data = new FormData(form);
      const payload = {
        name: value(data, "name"),
        phone: value(data, "phone"),
        email: value(data, "email"),
        projectType: value(data, "projectType"),
        message: value(data, "message"),
        website: value(data, "website"),
      };

      if (
        !payload.name ||
        !payload.phone ||
        !payload.email ||
        !payload.projectType ||
        !payload.message
      ) {
        setStatus(form, "Please complete all fields before sending your enquiry.");
        return;
      }

      const button = form.querySelector<HTMLButtonElement>("button");
      const label = button?.querySelector<HTMLElement>("span");
      const originalLabel = label?.textContent ?? "Send enquiry";

      busyForms.add(form);
      if (button) {
        button.disabled = true;
        button.setAttribute("aria-busy", "true");
      }
      if (label) label.textContent = "Sending…";
      setStatus(form, "Sending your enquiry…", true);

      try {
        const response = await fetch("/api/enquiries", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const result = (await response.json()) as { error?: string };

        if (!response.ok) {
          setStatus(
            form,
            result.error ?? "We could not send your enquiry. Please try again.",
          );
          return;
        }

        form.reset();
        setStatus(
          form,
          "Thank you. Your enquiry has been received and our team will get back to you.",
          true,
        );
      } catch {
        setStatus(
          form,
          "We could not connect to the enquiry service. Please try again.",
        );
      } finally {
        busyForms.delete(form);
        if (button) {
          button.disabled = false;
          button.removeAttribute("aria-busy");
        }
        if (label) label.textContent = originalLabel;
      }
    }

    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const button = target.closest<HTMLButtonElement>("#contact-form form button");
      if (!button) return;

      const form = button.closest<HTMLFormElement>("form");
      if (!form) return;

      event.preventDefault();
      event.stopPropagation();
      void submit(form);
    }

    function onSubmit(event: SubmitEvent) {
      const target = event.target;
      if (!(target instanceof HTMLFormElement)) return;
      if (!target.closest("#contact-form")) return;

      event.preventDefault();
      event.stopPropagation();
      void submit(target);
    }

    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);

    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, []);

  return null;
}
