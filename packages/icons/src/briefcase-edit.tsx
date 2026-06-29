import { mdiBriefcaseEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BriefcaseEdit(props: IconComponentProps) {
  return <Icon path={mdiBriefcaseEdit} {...props} />;
}

export { mdiBriefcaseEdit as path };
