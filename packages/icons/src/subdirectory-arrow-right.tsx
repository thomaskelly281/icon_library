import { mdiSubdirectoryArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SubdirectoryArrowRight(props: IconComponentProps) {
  return <Icon path={mdiSubdirectoryArrowRight} {...props} />;
}

export { mdiSubdirectoryArrowRight as path };
