import { mdiCodeBlockTags } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeBlockTags(props: IconComponentProps) {
  return <Icon path={mdiCodeBlockTags} {...props} />;
}

export { mdiCodeBlockTags as path };
