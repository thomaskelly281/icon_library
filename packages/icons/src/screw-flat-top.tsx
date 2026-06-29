import { mdiScrewFlatTop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScrewFlatTop(props: IconComponentProps) {
  return <Icon path={mdiScrewFlatTop} {...props} />;
}

export { mdiScrewFlatTop as path };
