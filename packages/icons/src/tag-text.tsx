import { mdiTagText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagText(props: IconComponentProps) {
  return <Icon path={mdiTagText} {...props} />;
}

export { mdiTagText as path };
