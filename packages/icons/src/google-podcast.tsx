import { mdiGooglePodcast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GooglePodcast(props: IconComponentProps) {
  return <Icon path={mdiGooglePodcast} {...props} />;
}

export { mdiGooglePodcast as path };
