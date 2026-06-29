import { mdiCodeTagsCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeTagsCheck(props: IconComponentProps) {
  return <Icon path={mdiCodeTagsCheck} {...props} />;
}

export { mdiCodeTagsCheck as path };
