import { mdiEmoticonNeutral } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonNeutral(props: IconComponentProps) {
  return <Icon path={mdiEmoticonNeutral} {...props} />;
}

export { mdiEmoticonNeutral as path };
