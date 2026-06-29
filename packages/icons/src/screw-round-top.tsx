import { mdiScrewRoundTop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScrewRoundTop(props: IconComponentProps) {
  return <Icon path={mdiScrewRoundTop} {...props} />;
}

export { mdiScrewRoundTop as path };
