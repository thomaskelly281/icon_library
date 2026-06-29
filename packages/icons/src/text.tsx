import { mdiText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Text(props: IconComponentProps) {
  return <Icon path={mdiText} {...props} />;
}

export { mdiText as path };
