import { mdiCheckbookArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckbookArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiCheckbookArrowLeft} {...props} />;
}

export { mdiCheckbookArrowLeft as path };
