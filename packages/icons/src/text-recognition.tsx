import { mdiTextRecognition } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextRecognition(props: IconComponentProps) {
  return <Icon path={mdiTextRecognition} {...props} />;
}

export { mdiTextRecognition as path };
