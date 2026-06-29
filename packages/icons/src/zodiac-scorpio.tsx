import { mdiZodiacScorpio } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ZodiacScorpio(props: IconComponentProps) {
  return <Icon path={mdiZodiacScorpio} {...props} />;
}

export { mdiZodiacScorpio as path };
