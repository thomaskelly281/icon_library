import { mdiBookArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiBookArrowLeft} {...props} />;
}

export { mdiBookArrowLeft as path };
