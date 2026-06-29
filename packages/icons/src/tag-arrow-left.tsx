import { mdiTagArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiTagArrowLeft} {...props} />;
}

export { mdiTagArrowLeft as path };
