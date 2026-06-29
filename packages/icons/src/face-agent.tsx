import { mdiFaceAgent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FaceAgent(props: IconComponentProps) {
  return <Icon path={mdiFaceAgent} {...props} />;
}

export { mdiFaceAgent as path };
