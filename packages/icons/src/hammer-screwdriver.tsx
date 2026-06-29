import { mdiHammerScrewdriver } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HammerScrewdriver(props: IconComponentProps) {
  return <Icon path={mdiHammerScrewdriver} {...props} />;
}

export { mdiHammerScrewdriver as path };
