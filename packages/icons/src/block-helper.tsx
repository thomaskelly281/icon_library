import { mdiBlockHelper } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BlockHelper(props: IconComponentProps) {
  return <Icon path={mdiBlockHelper} {...props} />;
}

export { mdiBlockHelper as path };
