import { mdiYoutubeSubscription } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function YoutubeSubscription(props: IconComponentProps) {
  return <Icon path={mdiYoutubeSubscription} {...props} />;
}

export { mdiYoutubeSubscription as path };
