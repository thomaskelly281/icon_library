import { mdiCarArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiCarArrowLeft} {...props} />;
}

export { mdiCarArrowLeft as path };
