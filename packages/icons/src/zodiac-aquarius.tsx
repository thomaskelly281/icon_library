import { mdiZodiacAquarius } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ZodiacAquarius(props: IconComponentProps) {
  return <Icon path={mdiZodiacAquarius} {...props} />;
}

export { mdiZodiacAquarius as path };
