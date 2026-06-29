import { mdiEmailArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiEmailArrowLeft} {...props} />;
}

export { mdiEmailArrowLeft as path };
