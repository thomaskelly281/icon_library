import { mdiEmoticonCool } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonCool(props: IconComponentProps) {
  return <Icon path={mdiEmoticonCool} {...props} />;
}

export { mdiEmoticonCool as path };
