import { useEffect } from "react";

interface MetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: object | object[];
}

const SITE_IMAGE = "https://www.cremsocial.com/logo.png";

function upsertMeta(selector: string, createAttrs: Record<string, string>, content: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    Object.entries(createAttrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function upsertJsonLd(schema: object | object[]) {
  const id = "schema-json-ld";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(schema);
}

export function Meta({ title, description, canonical, ogImage = SITE_IMAGE, schema }: MetaProps) {
  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', { name: "description" }, description);

    if (canonical) {
      upsertLink("canonical", canonical);
      upsertMeta('meta[property="og:url"]', { property: "og:url" }, canonical);
    }

    upsertMeta('meta[property="og:title"]', { property: "og:title" }, title);
    upsertMeta('meta[property="og:description"]', { property: "og:description" }, description);
    upsertMeta('meta[property="og:type"]', { property: "og:type" }, "website");
    upsertMeta('meta[property="og:image"]', { property: "og:image" }, ogImage);
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name" }, "Crem Social");

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, description);
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, ogImage);

    if (schema) {
      upsertJsonLd(schema);
    }
  }, [title, description, canonical, ogImage, schema]);

  return null;
}
