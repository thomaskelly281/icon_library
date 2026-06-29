import { mdiFaceRecognition } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FaceRecognition(props: IconComponentProps) {
  return <Icon path={mdiFaceRecognition} {...props} />;
}

export { mdiFaceRecognition as path };
