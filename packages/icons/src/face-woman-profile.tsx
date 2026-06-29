import { mdiFaceWomanProfile } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FaceWomanProfile(props: IconComponentProps) {
  return <Icon path={mdiFaceWomanProfile} {...props} />;
}

export { mdiFaceWomanProfile as path };
