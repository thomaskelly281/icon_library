import { mdiScrewLag } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScrewLag(props: IconComponentProps) {
  return <Icon path={mdiScrewLag} {...props} />;
}

export { mdiScrewLag as path };
