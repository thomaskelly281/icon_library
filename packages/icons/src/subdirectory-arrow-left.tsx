import { mdiSubdirectoryArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SubdirectoryArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiSubdirectoryArrowLeft} {...props} />;
}

export { mdiSubdirectoryArrowLeft as path };
