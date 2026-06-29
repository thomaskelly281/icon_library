import { mdiCheckbookArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckbookArrowRight(props: IconComponentProps) {
  return <Icon path={mdiCheckbookArrowRight} {...props} />;
}

export { mdiCheckbookArrowRight as path };
