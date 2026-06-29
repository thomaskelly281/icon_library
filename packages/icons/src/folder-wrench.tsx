import { mdiFolderWrench } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderWrench(props: IconComponentProps) {
  return <Icon path={mdiFolderWrench} {...props} />;
}

export { mdiFolderWrench as path };
