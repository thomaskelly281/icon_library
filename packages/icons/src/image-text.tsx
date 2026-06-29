import { mdiImageText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageText(props: IconComponentProps) {
  return <Icon path={mdiImageText} {...props} />;
}

export { mdiImageText as path };
