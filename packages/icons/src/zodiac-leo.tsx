import { mdiZodiacLeo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ZodiacLeo(props: IconComponentProps) {
  return <Icon path={mdiZodiacLeo} {...props} />;
}

export { mdiZodiacLeo as path };
