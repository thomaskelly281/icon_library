import { mdiEmoticonTongue } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonTongue(props: IconComponentProps) {
  return <Icon path={mdiEmoticonTongue} {...props} />;
}

export { mdiEmoticonTongue as path };
