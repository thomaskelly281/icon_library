import { mdiCodeTags } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeTags(props: IconComponentProps) {
  return <Icon path={mdiCodeTags} {...props} />;
}

export { mdiCodeTags as path };
