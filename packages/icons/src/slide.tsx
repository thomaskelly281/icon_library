import { mdiSlide } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Slide(props: IconComponentProps) {
  return <Icon path={mdiSlide} {...props} />;
}

export { mdiSlide as path };
