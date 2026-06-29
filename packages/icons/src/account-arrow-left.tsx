import { mdiAccountArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiAccountArrowLeft} {...props} />;
}

export { mdiAccountArrowLeft as path };
