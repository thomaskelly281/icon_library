import { mdiSocialDistance6Feet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SocialDistance6Feet(props: IconComponentProps) {
  return <Icon path={mdiSocialDistance6Feet} {...props} />;
}

export { mdiSocialDistance6Feet as path };
