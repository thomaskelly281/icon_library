import { mdiFaceManOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FaceManOutline(props: IconComponentProps) {
  return <Icon path={mdiFaceManOutline} {...props} />;
}

export { mdiFaceManOutline as path };
