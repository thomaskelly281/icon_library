import { mdiSubtitles } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Subtitles(props: IconComponentProps) {
  return <Icon path={mdiSubtitles} {...props} />;
}

export { mdiSubtitles as path };
