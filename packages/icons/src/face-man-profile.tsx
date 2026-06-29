import { mdiFaceManProfile } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FaceManProfile(props: IconComponentProps) {
  return <Icon path={mdiFaceManProfile} {...props} />;
}

export { mdiFaceManProfile as path };
