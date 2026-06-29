import { mdiGooglePlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GooglePlay(props: IconComponentProps) {
  return <Icon path={mdiGooglePlay} {...props} />;
}

export { mdiGooglePlay as path };
