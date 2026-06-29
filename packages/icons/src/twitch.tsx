import { mdiTwitch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Twitch(props: IconComponentProps) {
  return <Icon path={mdiTwitch} {...props} />;
}

export { mdiTwitch as path };
