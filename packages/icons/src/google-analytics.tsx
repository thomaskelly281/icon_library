import { mdiGoogleAnalytics } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleAnalytics(props: IconComponentProps) {
  return <Icon path={mdiGoogleAnalytics} {...props} />;
}

export { mdiGoogleAnalytics as path };
