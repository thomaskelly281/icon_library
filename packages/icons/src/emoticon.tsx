import { mdiEmoticon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Emoticon(props: IconComponentProps) {
  return <Icon path={mdiEmoticon} {...props} />;
}

export { mdiEmoticon as path };
