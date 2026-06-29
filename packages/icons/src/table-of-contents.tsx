import { mdiTableOfContents } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableOfContents(props: IconComponentProps) {
  return <Icon path={mdiTableOfContents} {...props} />;
}

export { mdiTableOfContents as path };
