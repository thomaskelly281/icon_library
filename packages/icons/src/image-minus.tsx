import { mdiImageMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageMinus(props: IconComponentProps) {
  return <Icon path={mdiImageMinus} {...props} />;
}

export { mdiImageMinus as path };
