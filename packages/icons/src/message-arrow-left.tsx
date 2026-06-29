import { mdiMessageArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiMessageArrowLeft} {...props} />;
}

export { mdiMessageArrowLeft as path };
