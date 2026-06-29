import { mdiTableArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiTableArrowLeft} {...props} />;
}

export { mdiTableArrowLeft as path };
