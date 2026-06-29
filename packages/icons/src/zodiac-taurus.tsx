import { mdiZodiacTaurus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ZodiacTaurus(props: IconComponentProps) {
  return <Icon path={mdiZodiacTaurus} {...props} />;
}

export { mdiZodiacTaurus as path };
