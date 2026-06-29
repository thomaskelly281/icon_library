import { mdiYoutubeTv } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function YoutubeTv(props: IconComponentProps) {
  return <Icon path={mdiYoutubeTv} {...props} />;
}

export { mdiYoutubeTv as path };
