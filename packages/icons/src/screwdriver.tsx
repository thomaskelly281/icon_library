import { mdiScrewdriver } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Screwdriver(props: IconComponentProps) {
  return <Icon path={mdiScrewdriver} {...props} />;
}

export { mdiScrewdriver as path };
