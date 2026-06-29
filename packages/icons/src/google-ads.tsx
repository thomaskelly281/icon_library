import { mdiGoogleAds } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleAds(props: IconComponentProps) {
  return <Icon path={mdiGoogleAds} {...props} />;
}

export { mdiGoogleAds as path };
